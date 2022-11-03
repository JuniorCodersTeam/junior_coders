import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';

const LoadingSkeleton = () => {

    return (
        <>

            <SkeletonTheme baseColor="grey" highlightColor="#EFEFEF">
                <div className="projects-container">

                    <div className="project-detail-container">
                        <div className="project-detail-image">
                            <Skeleton height={"100%"} />
                            <h3 className="project-h3">{<Skeleton />}</h3>
                        </div>
                        <div className="project-detail-info">
                            <p className="project-p">{<Skeleton count={9} />}</p>
                            <h4 className="project-h4"><Skeleton /></h4>
                            <p className="project-p">{<Skeleton count={9} />}</p>
                            <div className="project-detail-buttons">

                            </div>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </>
    )
};

export default LoadingSkeleton;