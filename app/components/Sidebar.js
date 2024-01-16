import useHerreria from '../hook/useHerreria'
import Category from './Category';

export default function Sidebar() {

    const {categories} = useHerreria();

    return(
        <>
            <nav style={{marginTop: '5rem'}}>
                {categories?.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                ))}
            </nav>
        </>      
    )
}