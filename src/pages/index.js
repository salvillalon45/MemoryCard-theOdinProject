// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/Seo/Seo';

// Boostrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Styling
import '../styles/global.scss';

// -----------------------------------------------

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />

		{/* <h1>Hi people</h1>
		<Container>
			<Row>
				<Col>
					<h1>SAL</h1>
					<h1>SAL</h1>

					<h1>SAL</h1>
				</Col>
			</Row>
		</Container> */}
	</Layout>
);

export default IndexPage;
