import Page from '@/components/page'
import Section from '@/components/section'
import Link from 'next/link'

const Recipes = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Github</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Checkout my other repository on github or reach out to me on manish.yadav.elit@gmail.com
				</p>
			</div>
			<div className='flex text-center mt-20'>
				<Link
					href='https://github.com/maniadav'
					target='_blank'
					rel='noopener noreferrer'
					className='px-4 py-2 mt-6 text-sm font-medium text-white bg-fuchsia-600 rounded-lg shadow-md hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600'
				>
					🚀 Check Other Repo
				</Link>
			</div>
		</Section>
	</Page>
)

export default Recipes
