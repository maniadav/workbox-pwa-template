import Page from '@/components/page'
import Section from '@/components/section'

const Story = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Blog</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					&quot;Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum&quot;
				</p>
			</div>
		</Section>
	</Page>
)

export default Story
