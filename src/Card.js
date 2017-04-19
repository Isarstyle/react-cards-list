import React, {Component} from 'react';

export default class Card extends Component {

    onCardClick() {

        //after ripple. look at index.css
        this.cardRef.addEventListener('transitionend', ()=>{

            this.cardRef.style.opacity = 0;

            this.props.moveRestUp(this.cardRef, this.cardRef.getBoundingClientRect().top, ()=>{
                this.props.removeCard(this.props.card);
            });


        }, {once: true, passive: true, capture: true});
    }

    render() {
        const {card} = this.props;

        if (this.cardRef) {
            this.cardRef.style.transform = '';
        }

        return (
            <div className='card' ref={ref => this.cardRef = ref} onClick={this.onCardClick.bind(this)} id={card.id}>
                <div className='card-inner ripple'>
                    <div className="information">
                        <img src={card.imageSrc} className='card-image' alt='some alt'/>
                        <div className="value">{card.value}</div>
                        <div className="label">{card.label}</div>
                    </div>
                </div>

            </div>
        )
    }

}