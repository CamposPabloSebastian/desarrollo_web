import React from "react";
import '../styles/componentes/pages/Home.css';

const Home = () =>{
    return(
        <main className="contenido">
            <div className="slider">
                <ul>
                    <li><img src="img/destacadas/foto1.jpg" alt=""/></li>
                    <li><img src="img/destacadas/foto2.jpg" alt=""/></li>
                    <li><img src="img/destacadas/foto3.jpg" alt=""/></li>
                </ul>
            </div>
            <div>
                <article>
                    <div>
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus facere iusto, dolorum porro officiis accusantium architecto! Libero voluptatem ipsa velit aut eveniet veritatis, reprehenderit assumenda doloremque nemo accusantium unde?
                        Voluptatum aperiam repellat aliquam? Aliquid deleniti eum fugit. Eaque suscipit nisi eveniet officia fuga, eligendi totam aut minus, eum laudantium temporibus. Sunt quo, at sit magni aliquam sapiente quod voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit tempore, quasi odit, numquam nam expedita ipsa eos, rem esse vitae soluta consectetur delectus corporis accusantium ipsum molestiae recusandae porro?</p>
                    </div>
                </article>
                <article>
                        <img src="img/asesorar.jpg" alt=""/>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident beatae sequi deserunt in reiciendis necessitatibus sunt sed soluta, delectus cupiditate. Eligendi veritatis quaerat maxime, dolores omnis eos velit fuga.
                        Dicta repellendus, nisi rerum veniam eius hic rem magni, accusantium quam placeat fugit numquam debitis culpa qui enim. Ullam consectetur, molestias corrupti debitis earum quisquam commodi optio magni voluptatum inventore?</p>
                    </div>                
                </article>
                <article>
                    <div>
                        <h2> Servicio post-venta</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident beatae sequi deserunt in reiciendis necessitatibus sunt sed soluta, delectus cupiditate. Eligendi veritatis quaerat maxime, dolores omnis eos velit fuga.
                        Dicta repellendus, nisi rerum veniam eius hic rem magni, accusantium quam placeat fugit numquam debitis culpa qui enim. Ullam consectetur, molestias corrupti debitis earum quisquam commodi optio magni voluptatum inventore?</p>
                    </div> 
                    <img src="img/servicio_post_venta.png" alt=""/>
                </article>
                <article>
                    <img src="img/medio-ambiente.jpg" alt=""/>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident beatae sequi deserunt in reiciendis necessitatibus sunt sed soluta, delectus cupiditate. Eligendi veritatis quaerat maxime, dolores omnis eos velit fuga.
                        Dicta repellendus, nisi rerum veniam eius hic rem magni, accusantium quam placeat fugit numquam debitis culpa qui enim. Ullam consectetur, molestias corrupti debitis earum quisquam commodi optio magni voluptatum inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi, incidunt iste quidem dignissimos quis consequatur repellat repellendus ea iusto distinctio. Nostrum rerum maxime cupiditate quis numquam repellendus amet magni.</p>
                    </div>                
                </article>
            </div>        
        </main>
    )
}
 export default Home;