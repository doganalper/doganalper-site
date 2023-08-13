import fs from 'fs/promises'
import satori from 'satori'
import sharp from 'sharp'

const font = fs.readFile('./public/RobotoMono-Regular.ttf')

export default async function renderOgImage(
	title: string,
	description: string,
) {
	const fontData = await font

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#f5f5f5',
					paddingLeft: '20px',
				},
				children: [
					{
						style: 'div',
						props: {
							style: {
								height: '100%',
								width: '2px',
								backgroundColor: 'black',
							},
						},
					},
					{
						style: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'column',
								flex: 1,
								justifyContent: 'center',
								marginLeft: '7%',
							},
							children: [
								{
									style: 'div',
									props: {
										style: {
											fontSize: 36,
											fontWeight: 600,
										},
										children: 'Hello, World!',
									},
								},
								{
									style: 'div',
									props: {
										style: {
											fontSize: 24,
											fontWeight: 500,
											color: '#71717a',
											maxWidth: '70%',
										},
										children: 'Mock description',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Roboto',
					data: font,
					weight: 400,
					style: 'normal',
				},
			],
		},
	)

	const png = await sharp(Buffer.from(svg)).png().toBuffer()

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
		},
	})
}
