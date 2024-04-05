/* 
* <license header>
*/

import React from 'react'
import { Heading, View, Content, Link, DatePicker, Flex } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
import FormService from '../../services/FormService';
import { now } from '@internationalized/date';
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'DateTime' }
];
export const DateTime = () => (
    <View width="size-6000">
        {AddBreadcrumbs(pathsObBreadcrumbs)}
        <Heading level={1}>Learning DateTime</Heading>
        <Content>
            <View width={'size-3600'}>
                <DatePicker label="Event date" />
            </View>
            <View width={'size-4000'}>
                <Flex gap="size-250" wrap>
                    <DatePicker label="Birth date" />
                    <DatePicker label="Birth date" isRequired necessityIndicator="icon" />
                    <DatePicker label="Birth date" isRequired necessityIndicator="label" />
                    <DatePicker label="Birth date" necessityIndicator="label" />
                </Flex>
            </View>
            <View width={'size-3600'}>
                <Flex gap="size-150" wrap>
                    <DatePicker
                        label="Event date"
                        granularity="second" />
                    <DatePicker
                        label="Event date"
                        placeholderValue={now('America/New_York')}
                        granularity="second" />
                </Flex>
            </View>
        </Content>
    </View>
)
