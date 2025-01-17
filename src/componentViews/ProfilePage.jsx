import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'
// core components
import { Exports } from 'componentpMultiOrganisms'

const {
	Footer,
	CarouselCommonPropedProfile,
	FormProfile,
	RatingProfile,
	ButtonAddToCartPropedProfile,
	QuantityProfile,
	ContainerTitledPropedDefault,
	CommentCommonPropedProfile,
	PaginationCommon,
	AvatarProfile,
} = stopUndefined(Exports)

const buttonStreams = [
	{
		id: 'facebook',
		icon: 'fab fa-facebook-f',
		color: 'facebook',
		tooltip: 'Follow me on my Facebook',
	},
	{
		id: 'twitch',
		icon: 'fab fa-twitch',
		color: 'twitch',
		tooltip: 'Subscribe to my Twitch channel',
	},
	{
		id: 'youtube',
		icon: 'fab fa-youtube',
		color: 'youtube',
		tooltip: 'Subscribe to my Youtube channel',
	},
]

const badges = [
	{
		id: 'female',
		color: 'primary',
		body: 'Female',
	},
	{
		id: 'verified',
		color: 'info',
		body: 'Verified',
	},
	{
		id: 'risingStar',
		color: 'warning',
		body: 'Rising Star',
	},
]

const ProfilePage = () => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('profile-page')
		return () => {
			document.body.classList.remove('profile-page')
		}
	}, [])

	return (
		<div className='wrapper' ref={wrapper}>
			<div className='page-header'>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container className='align-items-center'>
					<Row>
						<AvatarProfile
							nickname='Mike Scheinder'
							username='mighty_mike'
							avatar={require('assets/img/mike.jpg')}
							socials={buttonStreams}
							signature='I will kick your ass'
							badges={badges}
						/>
						<Col lg='8' md='6'>
							<ContainerTitledPropedDefault>
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='py-2'>
										<RatingProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='pt-2'>
										<h2>$30/h</h2>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 11, offset: 1 }} className='pb-2'>
										<h4>Description</h4>
										<p>
											A veteran in MOBA and FPS games, I can give you a
											significant boost in ranking mode.
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<QuantityProfile />
									</Col>
									<Col md={{ size: 6 }} className='py-2'>
										<FormProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<ButtonAddToCartPropedProfile />
									</Col>
								</Row>
							</ContainerTitledPropedDefault>
						</Col>
					</Row>
				</Container>
			</div>
			<section className='section'>
				<Container>
					<Row>
						<Col
							xs={{ size: 6, offset: 4 }}
							sm={{ size: 6, offset: 5 }}
							md={{ size: 6, offset: 5 }}>
							<h1>Images</h1>
						</Col>
					</Row>
					<Row>
						<Col md='12'>
							<CarouselCommonPropedProfile />
						</Col>
					</Row>
					<Row>
						<Col
							className='py-5'
							xs={{ size: 6, offset: 4 }}
							sm={{ size: 6, offset: 5 }}
							md={{ size: 6, offset: 5 }}>
							<h1>Comments</h1>
						</Col>
					</Row>
					<Row>
						<Col md={{ size: 8, offset: 2 }} className='pt-5 pb-5'>
							<CommentCommonPropedProfile />
							<PaginationCommon />
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</div>
	)
}

export { ProfilePage }
