import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import {
    parseAlt,
    parseAnchor,
    parseFocus,
    parseMode,
    parsePreTransform,
    parseRatio,
    parseSrc,
    parseStep
} from '../src/_/parse';
import {
    computeAlt,
    computeSize,
    computeSrc,
    computeStyle,
    computeWrapperStyle
} from '../src/_/compute';
import { config } from '../src/_/install';

const TwicWrapper = (props) => {
    let width, height;
    ({ width, height } = props);
    const alt = parseAlt(props.alt);
    const anchor = parseAnchor(props.anchor);
    const focus = parseFocus(props.focus);
    const mode = parseMode(props.mode);
    const preTransform = parsePreTransform(props.preTransform);
    const ratio = parseRatio(props.ratio);
    const src = parseSrc(props.src);
    const step = parseStep(props.step);

    const size = computeSize(width, height, ratio);
    const computedSrc =
        size.width && computeSrc(anchor, focus, mode, preTransform, size, src, step);
    console.log('computedSrc', computedSrc);
    if (computedSrc) {
        return (
            <View style={computeWrapperStyle(size, styles)}>
                <Image
                    accessibilityLabel={computeAlt(alt, src)}
                    source={{ uri: computedSrc }}
                    resizeMode={mode}
                    style={styles.img}
                    onLoadStart={props.onLoadStart}
                    onLoadEnd={props.onLoadEnd}
                />
                {config.debug && (
                    <View style={styles.debug}>
                        <Text>
                            {width} {height} - {computedSrc}
                        </Text>
                    </View>
                )}
            </View>
        );
    } else {
        return;
    }
};
export default class TwicImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        };
    }
    render() {
        const { props } = this;
        const ratio = parseRatio(props.ratio);
        const style = computeStyle(props.style, ratio);
        return (
            <View
                style={StyleSheet.flatten([styles.layout, style])}
                onLayout={(event) => {
                    console.log('onLayout');
                    let { x, y, width, height } = event.nativeEvent.layout;
                    console.log(x, y, width, height);
                    this.setState({
                        width: width,
                        height: height,
                        x: x,
                        y: y
                    });
                }}
            >
                <TwicWrapper {...props} width={this.state.width} height={this.state.height} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    debug: {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#cccccc'
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
    },
    layout: {
        overflow: `hidden`,
        width: '100%',

        backgroundColor: '#FF0000'
    },
    wrapper: {
        overflow: `hidden`,
        width: '100%'
    }
});
