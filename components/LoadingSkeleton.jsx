import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = () => {
    
    return (
        <>
        <div className='container skeleton-container'>
            <p className='skeleton'><Skeleton /></p>
            <p className='skeleton'><Skeleton /></p>
            <p className='skeleton'><Skeleton /></p>
            <p className='skeleton'><Skeleton /></p>
        </div>
        </>
    )
};

export default LoadingSkeleton;