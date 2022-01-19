import React from 'react';
import { View } from 'react-native';
import { HOUR_BLOCK_HEIGHT } from './Packer';
export { HOUR_BLOCK_HEIGHT } from './Packer';
const NowIndicator = (props) => {
    const { styles } = props;
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const indicatorPosition = (hour + minutes / 60) * HOUR_BLOCK_HEIGHT;
    return (<View style={[styles.nowIndicator, { top: indicatorPosition }]}>
      <View style={styles.nowIndicatorLine}/>
      <View style={styles.nowIndicatorKnob}/>
    </View>);
};
export default NowIndicator;
