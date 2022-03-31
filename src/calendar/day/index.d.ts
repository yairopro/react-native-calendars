import PropTypes from 'prop-types';
import React from 'react';
import { DateData } from '../../types';
import { BasicDayProps } from './basic';
export interface DayProps extends BasicDayProps {
    /** Provide custom day rendering component */
    dayComponent?: React.ComponentType<DayProps & {
        date?: DateData;
    }>;
}
declare const Day: any;
export default Day;
export declare const propTypes: {
    dayComponent: PropTypes.Requireable<any>;
    state: PropTypes.Requireable<string>;
    marking: PropTypes.Requireable<any>;
    markingType: PropTypes.Requireable<import("./marking").Markings>;
    theme: PropTypes.Requireable<object>;
    onPress: PropTypes.Requireable<(...args: any[]) => any>;
    onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
    date: PropTypes.Requireable<string>;
    disableAllTouchEventsForDisabledDays: PropTypes.Requireable<boolean>;
    disableAllTouchEventsForInactiveDays: PropTypes.Requireable<boolean>;
};
