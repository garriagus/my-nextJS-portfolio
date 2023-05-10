
export default function Post({ children, ...props }) {
    {/*    */ }
    return (
        <>
            {/*___________Post  ___________*/}
            <div id={props.div}>
            
                <div className="page" id={props.id}>
                <span>{children}</span>
                    <section className="icon fa fa-bolt">
                        <span className="title">
                           
                        </span>
                    </section>
                </div>
            </div>
        </>
    );
}
