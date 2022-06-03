import './Twitter.css';

function Twitter() {
    return(
       <div className='geral'>
       <h1>Talvez você curta</h1>
            <ul>
                <li>
                    <div className='container'>
                    <img src='https://logopng.com.br/logos/spacex-159.svg'/>
                    SpaceX<br/><blockquote>@SpaceX</blockquote>
                    </div>
                    <button>Seguir</button>
                </li>
                <li>
                    <div className='container'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/165px-NASA_logo.svg.png'/>
                    NASA<br/><blockquote>@Nasa</blockquote>
                    <button>Seguir</button>
                    </div>
                </li><li>
                <div className='container'>
                <img src='https://classic.exame.com/wp-content/uploads/2021/05/espaco2.jpg?quality=70&strip=info&w=1024'/>
                Jeff Bezos<br/> <blockquote>@JeffBezos</blockquote>
                <button>Seguir</button>
                </div>
            </li>
            </ul>
       </div>
    );
}
export default Twitter;