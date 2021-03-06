import React from 'react';
import millify from 'millify';
import {Collapse, Row, Col, Typography, Avatar} from 'antd';
import HTMLReactParser from 'html-react-parser';
import { Loading } from './';

import { useGetExchangeQuery } from '../services/cryptoApi';

const { Panel } = Collapse;
const {Text} = Typography;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangeQuery();
    const exchangeList = data?.data?.exchanges;
    
    window.scrollTo({ top: 0,});

    if(isFetching) return <Loading />

    return (
        <>
            <Row>
                <Col span = {6}>Exchanges</Col>
                <Col span = {6}>24h Trade Volume</Col>
                <Col span = {6}>Markets</Col>
                <Col span = {6}>Change</Col>
            </Row>
            <Row>
                {exchangeList?.map((exchange) => (
                    <Col span = {24} >
                        <Collapse>
                            <Panel
                                key = {exchange.id}
                                showArrow = {false}
                                header = {(
                                    <Row key={exchange.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || "")}
                            </Panel>
                        </Collapse>    
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges
