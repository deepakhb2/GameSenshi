import React from 'react'
import { Card, CardHeader, CardBody, Col, Row } from 'reactstrap'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { ButtonSocials, Badges } = stopUndefined(Exports)

const onClicks = socials => []

const AvatarProfile = props => {
	const {
		badges,
		signature,
		avatar,
		gameIcons,
		nickname,
		username,
		socials,
	} = props
	return (
		<Col className='ml-auto mr-auto' lg='4' md='6'>
			<Card className='card-coin card-plain'>
				<CardHeader>
					<img
						alt='...'
						className='img-center img-fluid rounded-circle'
						src={avatar}
					/>
					<Row className='justify-content-center mt-3'>
						{/*badges like female,verified,pro,highest rating,new member,highest rating*/}
						<Badges badges={badges} />
					</Row>
					<h3 className='title mt-3 mb-1'>{nickname}</h3>
					<p className='text-muted text-center'>@{username}</p>
					<Row className='justify-content-center'>
						{/* Social icons */}
						<ButtonSocials
							buttons={socials}
							onClicks={onClicks}
							className='pt-2'
						/>
					</Row>
				</CardHeader>
				<CardBody>
					<Row className='justify-content-center'>
						{/*Game icons*/}
						{gameIcons}
					</Row>
					<Row className='justify-content-center'>
						{/* Signature */}
						<p className='pl-2 font-italic'>
							"{signature || 'Nice to meet you!'}"
						</p>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export { AvatarProfile }
