import React, { Component } from "react";
import ImageGallery from "./controls/ImageGallery";
import SmallVideo from "./controls/SmallVideo";
import "./App.css"

class App extends Component {
  render() {
    return (
      <article className={"app"}>
        <h3>Subtitle</h3>
        <h1>Title of the section</h1>
        <ImageGallery> </ImageGallery>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis enim ac massa sodales euismod.
          Nulla in nunc ac nisl dapibus dapibus ac vitae neque. Praesent id nunc at orci interdum porta. Aliquam eu
          suscipit leo. Mauris iaculis ex vitae ligula pulvinar venenatis. Morbi malesuada erat feugiat, vulputate
          dolor id, scelerisque sapien. Aenean condimentum augue sit amet porta fermentum. Aenean venenatis purus vel
          auctor auctor. Nullam mattis tortor a elit ultricies tempus. Curabitur facilisis posuere euismod. Aenean vehicula
          lacus leo, eget dictum sapien faucibus non. Suspendisse diam sem, egestas eu placerat in, semper nec augue.
          In bibendum mauris sed enim efficitur imperdiet. Quisque posuere velit ut dolor sagittis, nec tempor sapien
          condimentum. Morbi ornare, massa suscipit faucibus pretium, est mi tristique massa, et hendrerit lorem massa
          non magna.
        </p>
        <figure className={"app-small-video"}>
          <SmallVideo></SmallVideo>
        </figure>
        <p>
          Nulla porttitor, dui nec facilisis condimentum, nisi eros interdum nisi, sed porttitor urna neque non
          libero. Donec mollis purus magna, ut ornare sem sodales non. Integer ullamcorper sem eget augue finibus
          condimentum. Aliquam sodales ante a varius consequat. Praesent pharetra, nisi quis scelerisque.
        </p>
        <p>
          Pellentesque, mauris nulla mollis odio, ut dignissim neque mauris nec metus. Quisque non justo sit amet
          ipsum imperdiet lobortis ut sit amet ante. Ut vel metus orci. Nullam fermentum leo vitae quam bibendum.
          scelerisque sapien. Aenean condimentum augue sit amet porta fermentum. Aenean venenatis purus vel
          auctor auctor. Nullam mattis tortor a elit ultricies tempus. Curabitur facilisis posuere euismod. Aenean
          vehicula lacus leo, eget dictum sapien faucibus non. Suspendisse diam sem, egestas eu placerat in, semper nec augue.
          In bibendum mauris sed enim efficitur imperdiet. Quisque posuere velit ut dolor sagittis, nec tempor sapien
          condimentum.
        </p>
        <p>
          Eleifend. Maecenas scelerisque ex massa, et dignissim lorem tempus vel. Suspendisse malesuada, tellus
          tristique dignissim suscipit, nibh augue congue sapien, sit amet molestie nunc lacus in mi. Aliquam
          vitae felis sit amet urna efficitur dapibus. Curabitur auctor neque velit, eu dapibus orci porttitor
          eget.
        </p>

        <p>
          Nam vehicula, sapien non luctus tempor, ex leo lacinia nisl, ac dapibus odio arcu a mauris. Sed orci erat,
          condimentum vel mauris eu, commodo dictum nulla. Integer pellentesque nisl in tincidunt dictum. Vivamus
          porta ipsum turpis, in elementum mauris mollis at. In tempor velit nec metus porta dictum. Vivamus malesuada
          porttitor lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Duis id dui a libero tristique finibus. Aenean ullamcorper, enim sit amet luctus maximus, libero
          risus luctus neque, sit amet vulputate nunc leo id neque. Phasellus consequat sagittis nulla sed imperdiet.
          Suspendisse pulvinar elit vehicula mattis varius. Ut id elit sollicitudin, hendrerit turpis non, ultricies
          augue.
        </p>

      </article>
    );
  }
}

export default App;
