/* eslint-enable */
import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>

      <Navbar />

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className=" text-center">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2016/06/Alumni1.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="container-fluid" id="About">
          <div className="row">
            <div className="col-md">
              <br />
              <h1>About</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem facilis officia aliquam mollitia at animi assumenda,
              vel praesentium debitis libero dolorum fugiat temporibus provident
              aut deleniti? Temporibus voluptatem culpa officiis maiores error
              quia ipsa, nulla suscipit sed possimus assumenda aspernatur ut ab
              debitis incidunt perferendis laudantium esse atque ea? Facere nisi
              iure accusamus qui, magni, beatae sunt assumenda fugiat rerum nihil
              corporis harum asperiores, obcaecati nemo! Ipsam in pariatur
              aliquid.
            </div>
            <div className="col-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dnVa7OmgN24DyIm5F2naR0F-EvM8JJf8xw&usqp=CAU"
                alt=".0.0."
                className="img-fluid"
              />
            </div>
          </div>
          <hr />
          <br />

          <div className="row" id="Features">
            <div className="col-md text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LjVBFtY7Q2IpQGVa9-JC5DBr0AKgdDSjUAdiwrgIvtJLXC5qLeLW8tWgHjLae5ScGLQ&usqp=CAU"
                alt="00.."
                className="img-fluid"
              />
            </div>
            <div className="col-md">
              <h1>Features</h1>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores
              asperiores vero optio aut eos quae consectetur iditate quibusdam
              labore earum eius accusamus. Impedit nisi fugiat possimus deleniti.
              Minus, alias odit ducimus ad voluptatibus quia veritatis, architecto
              voluptatum cumque minima aliquam commodi ipsam officiis asperiores
              amet velit ut aliquid a quas, laudantium nihil? Nam aperiam adipisci
              voluptatum iure possimus impedit ducimus molestias rem optio eaque
              nobis reiciendis at soluta repellat ipsam expedita fugiat id
              excepturi sint alias, veniam amet. Tempore mollitia, quasi,
              doloremque ab incidunt ducimus voluptatibus et facere odit, neque
              omnis quis ut provident! Consequatur, ullam eaque dolor quia
              reprehenderit, accusamus nesciunt vero, et atque culpa ad illum?
              Unde quasi hic voluptate illum qui dolor iusto itaque, ipsum rem
              beatae eligendi, molestias quae!
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default LandingPage