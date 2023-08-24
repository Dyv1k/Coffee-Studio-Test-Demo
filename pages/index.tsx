import React, { FC } from 'react'
import Head from 'next/head'

import Cards from '@/widgets/Cards/Cards'
import Benefits from '@/widgets/Benefits/Benefits'
import ReservedPlaces from '@/widgets/ReservedPlaces/ReservedPlaces'
import Hotels from '@/widgets/Hotels/Hotels'
import Subscribe from '@/widgets/Subscribe/Subscribe'
import Tours from '@/widgets/Tours/Tours'

const MainPage: FC = () => {


	return (
      	<>
			<Head>
				<title>Атмосфера путешествий</title>
			</Head>
			<Cards/>
			<Tours/>
			<Benefits/>
			<ReservedPlaces/>
			<Hotels/>
			<Subscribe/>
      	</>
	)
}

export default MainPage