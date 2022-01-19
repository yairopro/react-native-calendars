import { Component } from 'react';
import { TimelineEventProps, TimelineProps } from 'react-native-calendars';
export default class TimelineCalendarScreen extends Component {
    state: {
        currentDate: string;
        events: TimelineEventProps[];
        eventsByDate: {
            [key: string]: TimelineEventProps[];
        };
    };
    marked: {
        '2017-09-06': {
            marked: boolean;
        };
        '2017-09-07': {
            marked: boolean;
        };
        '2017-09-08': {
            marked: boolean;
        };
        '2017-09-10': {
            marked: boolean;
        };
    };
    onDateChanged: (date: string) => void;
    onMonthChange: () => void;
    createNewEvent: TimelineProps['onBackgroundLongPress'];
    approveNewEvent: TimelineProps['onBackgroundLongPressOut'];
    private timelineProps;
    render(): JSX.Element;
}
