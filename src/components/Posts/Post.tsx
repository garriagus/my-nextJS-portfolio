
export default function Post({ children }) {
    {/*    */ }
    return (
        <>
            {/*___________Post 1 ___________*/}
            <div className="page" id="p1">
                <section className="icon fa fa-bolt">
                    <span className="title">Agustín Garrido</span>
                    <span className="hint">Full Stack Developer<br></br>
                        Java & React Js
                    </span>
                </section>
            </div>
            {/*___________Post 2 ___________*/}
            <div className="page" id="p2">
                <section className="icon fa fa-bolt"><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!...<br></br> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>
            </div>
            <div className="page" id="p2">
                <section className="icon fa fa-keyboard-o">
                    <span className="title">Java</span>
                    <span className="hint">Aquí se encuentran mis proyectos con Java<br></br>
                        En construcción...
                    </span>
                </section>
            </div>
            {/*___________Post 3 ___________*/}
            <div className="page" id="p3">
                <section className="icon fa fa-rocket">
                    <span className="title">Next Js</span>
                    <span className="hint">Aquí se encuentran mis proyectos con Next Js<br></br>
                        En construcción...
                    </span>
                </section>
            </div>
            {/*___________Post 4 ___________*/}
            <div className="page" id="p4">
                <section className="icon fa fa-dribbble">
                    <span className="title">Mis redes Sociales</span>
                    <p className="hint">
                        <a href="https://github.com/garriagus" target="_blank">En construccion...<span className="hint line-trough">Hecho por </span> @garriagus</a>
                    </p>
                    <p className="hint">Already invited by <a href="https://github.com/garriagus" target="_blank">Stan Peters</a></p>
                </section>
            </div>
            {/*___________Post 5 ___________*/}
            <div className="page" id="p5">
                <section className="icon fa fa-plus-circle">
                    <span className="title">Github</span>
                    <p className="hint">
                        <span>Accede a mis repositorios de Github </span><br />
                        <a href="https://github.com/garriagus" target="_blank">check this pprojects here</a>
                    </p>
                </section>
            </div>

        </>
    );
}
