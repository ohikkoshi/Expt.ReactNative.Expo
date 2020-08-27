import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	Container,
	Header, Content, Footer,
	Title, Left, Right, Body,
	Button, Icon, Text, Form, Input, Item, Label, Card, CardItem, Thumbnail,
} from 'native-base';

const _HEADER_ = "ヘッダー";
const _FOOTER_ = "フッター";

export default class App extends React.Component {
	render() {
		return (
			<Container style={styles.container}>
				{/* ヘッダー */}
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => { }}>
							<Icon name="arrow-back" />
							<Text>Back</Text>
						</Button>
					</Left>
					<Title>{_HEADER_}</Title>
					<Right>
						<Button transparent onPress={() => { }}>
							<Icon name="menu" />
						</Button>
					</Right>
				</Header>

				{/* コンテンツ */}
				<Content style={styles.content}>
					<Form>
						<Item fixedLabel>
							<Label>ラベル</Label>
							<Input placeholder="example" />
						</Item>
					</Form>

					<Button>
						<Text>ボタン</Text>
					</Button>

					<Card>
						<CardItem>
							<Left>
								<Body>
									<Thumbnail source={require("./assets/favicon.png")} />
									<Text>カード</Text>
								</Body>
							</Left>
							<Text>テキスト</Text>
						</CardItem>
					</Card>
				</Content>

				{/* フッター */}
				<Footer styles={styles.fotter}>
					<Text>{_FOOTER_}</Text>
				</Footer>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
	},
	fotter: {
		alignItems: "center",
		justifyContent: "center"
	},
	content: {
		padding: 10,
	},
});
