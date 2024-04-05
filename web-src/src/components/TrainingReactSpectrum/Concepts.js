/* 
* <license header>
*/

import React from 'react'
import { Heading, View, Content, Link, Grid, Flex, Text } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
import '../../css/index.css'
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'Concepts' }
];
export const Concepts = () => (
    <View maxWidth="size-7000">
        {AddBreadcrumbs(pathsObBreadcrumbs)}
        <Heading level={1}>Learning Concepts</Heading>
        <Content>
            <Grid
                areas={[
                    'header  header',
                    'sidebar content',
                    'footer  footer'
                ]}
                columns={['1fr', '5fr']}
                rows={['size-1000', 'auto', 'size-1000']}
                height="size-6000"
                gap="size-100">
                <View backgroundColor="celery-600" gridArea="header" >
                    <div className='area-note'>Header Area</div>
                </View>
                <View backgroundColor="blue-600" gridArea="sidebar" >
                    <div className='area-note'>Sidebar Area</div>
                </View>
                <View backgroundColor="purple-600" gridArea="content" >
                    <div className='area-note'>Content Area</div>
                </View>
                <View backgroundColor="magenta-600" gridArea="footer" >
                    <div className='area-note'>Footer Area</div>
                </View>
            </Grid>
        </Content>
    </View>
)
