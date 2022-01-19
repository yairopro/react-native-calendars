import React from 'react';
import { ScrollViewProps } from 'react-native';
import { RecyclerListViewProps } from 'recyclerlistview';
export interface InfiniteListProps extends Omit<RecyclerListViewProps, 'dataProvider' | 'layoutProvider' | 'rowRenderer'> {
    data: any[];
    renderItem: RecyclerListViewProps['rowRenderer'];
    pageWidth?: number;
    pageHeight?: number;
    onPageChange?: (pageIndex: number, prevPageIndex: number) => void;
    onReachEdge?: (pageIndex: number) => void;
    onReachNearEdge?: (pageIndex: number) => void;
    onReachNearEdgeThreshold?: number;
    initialPageIndex?: number;
    scrollViewProps?: ScrollViewProps;
}
declare const _default: React.ForwardRefExoticComponent<InfiniteListProps & React.RefAttributes<unknown>>;
export default _default;
