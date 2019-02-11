import React, { Component,Fragment } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


class ViewDetail extends Component {
  render() {
    const {bookList} = this.props;
    const bookId = this.props.match.params.id; 
    
    if (bookList.length > 0 && bookId < bookList.length){
      const myBook = bookList[bookId];

      const {author , title, tags, status, ISBN, type, id}= myBook;
    
     return (
       <Fragment>
         <ul className="list__view-details">
           <li className="list__item">
             <h2 className="list__item--title">Título</h2>
             <div className="list__item--content" data-detailtitleid={id}>{title}</div>
           </li>
           <li className="list__item">
             <h2 className="list__item--title">Autor</h2>
             <div className="list__item--content">{author}</div>
           </li>
           <li className="list__item">
             <h2 className="list__item--title">ISBN</h2>
             <div className="list__item--content">{ISBN}</div>
           </li>
           <li className="list__item">
             <h2 className="list__item--title">Tipo</h2>
             <div className="list__item--content">{type}</div>
           </li>
           <li className="list__item">
             <h2 className="list__item--title">Tags</h2>
             <div className="list__item--content">
               <ul className="list__tags--list">
                 {tags.map((tag, index) => {
                   return (
                     <li className="list__tags--item" key={index}>{tag}</li>
                   )
                 })}
               </ul>
             </div>
           </li>
           <li className="list__item">
             <h2 className="list__item--title">Estado</h2>
             <div className="list__item--content">{status}</div>
           </li>
         </ul>
         <Link className="link__back" to="/">Cerrar</Link>
       </Fragment>
    )
  } else {
      return (
        <Fragment>
          <p className="no_dates">Sin datos</p>
          <Link className="link__back" to="/">Atrás</Link>
        </Fragment>
      );
   }
  };
}

ViewDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default ViewDetail;

