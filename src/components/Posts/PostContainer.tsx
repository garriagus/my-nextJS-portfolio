import styles from './PostContainer.module.css'
export default function Post({ children, ...props }) {
    {/*    */ }
    return (
        <>
            {/*___________Post  ___________*/}
            
                <div className="page" id={props.id}>
                 {children}
                </div>
        </>
    );
}
