import { ICardProps } from "./types";

export default function Card(props: ICardProps) {
  return (
    <div className='card bg-base-100 col-span-1 shadow-sm'>
      <div className='bg-green-300 w-full h-[100px]'></div>
      <div className='card-body'>
        <h2 className='card-title'>{props.name}</h2>
        <p>{props?.price}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
