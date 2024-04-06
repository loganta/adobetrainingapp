/* 
* <license header>
*/

import React from 'react'
import { Heading, View, Content, TableView, TableBody, TableHeader, Column, Row, Cell } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'Table' }
];


export const ShowTable = () => (
    <View width="size-6000">
        {AddBreadcrumbs(pathsObBreadcrumbs)}
        <Heading level={1}>Learning Table</Heading>
        <Content>
            <View width={'size-4000'}>
                <TableView
                    aria-label="Example table with multiple selection"
                    selectionMode="multiple"
                    defaultSelectedKeys={['2', '4']}
                >
                    <TableHeader>
                        <Column>Name</Column>
                        <Column>Type</Column>
                        <Column align="end">Level</Column>
                    </TableHeader>
                    <TableBody>
                        <Row key="1">
                            <Cell>Charizard</Cell>
                            <Cell>Fire, Flying</Cell>
                            <Cell>67</Cell>
                        </Row>
                        <Row key="2">
                            <Cell>Blastoise</Cell>
                            <Cell>Water</Cell>
                            <Cell>56</Cell>
                        </Row>
                        <Row key="3">
                            <Cell>Venusaur</Cell>
                            <Cell>Grass, Poison</Cell>
                            <Cell>83</Cell>
                        </Row>
                        <Row key="4">
                            <Cell>Pikachu</Cell>
                            <Cell>Electric</Cell>
                            <Cell>100</Cell>
                        </Row>
                    </TableBody>
                </TableView>
            </View>
            <View width={'size-4000'} marginTop={30}>
                <TableView
                    aria-label="Example table with static contents"
                    selectionMode="multiple"
                >
                    <TableHeader>
                        <Column>Name</Column>
                        <Column>Type</Column>
                        <Column align="end">Date Modified</Column>
                    </TableHeader>
                    <TableBody>
                        <Row>
                            <Cell>Games</Cell>
                            <Cell>File folder</Cell>
                            <Cell>6/7/2020</Cell>
                        </Row>
                        <Row>
                            <Cell>Program Files</Cell>
                            <Cell>File folder</Cell>
                            <Cell>4/7/2021</Cell>
                        </Row>
                        <Row>
                            <Cell>bootmgr</Cell>
                            <Cell>System file</Cell>
                            <Cell>11/20/2010</Cell>
                        </Row>
                        <Row>
                            <Cell>log.txt</Cell>
                            <Cell>Text Document</Cell>
                            <Cell>1/18/2016</Cell>
                        </Row>
                    </TableBody>
                </TableView>
            </View>
        </Content>
    </View>
)
