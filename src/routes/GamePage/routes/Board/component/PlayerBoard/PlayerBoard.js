import PokemonCard from '../../../../../../components/PokemonCard/PokemonCard';
import cn from 'classnames';
import s from './PlayerBoard.module.css';
import { useState } from 'react';


const PlayerBoard = ({ player, cards, onClickCard }) => {
	const [isSelected, setSelected] = useState(null);

	return (
		<>
			{
				cards.map((item) => (
					<div className={cn(s.cardBoard, {
						[s.selected]: isSelected === item.id
					})}
						onClick={() => {
							setSelected(item.id);
							onClickCard && onClickCard({
								player,
								...item,
							});
						}}
					>
						<PokemonCard
							key={item.id}
							name={item.name}
							img={item.img}
							type={item.type}
							id={item.id}
							values={item.values}
							minimize
							isActive
						/>
					</div>
				))
			}
		</>
	)
}

export default PlayerBoard;