// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { BarChartSignalNames } from './constants';
import { FieldNames } from '../constants';
import { SpecColumns } from '../types';
import { StackTransform, Transforms } from 'vega-typings';

export default function (columns: SpecColumns) {
    const stackTransform: StackTransform = {
        "type": "stack",
        "groupby": [
            {
                "field": columns.y.name
            }
        ],
        "as": [
            FieldNames.BarChartStack0,
            FieldNames.BarChartStack1
        ]
    };
    if (columns.sort) {
        stackTransform.sort = {
            "field": columns.sort.name
        };
    }
    const transforms: Transforms[] = [
        stackTransform,
        {
            "type": "extent",
            "signal": BarChartSignalNames.levelExtentSignal,
            "field": FieldNames.BarChartStack1
        }
    ];

    return transforms;
}