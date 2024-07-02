import {Link} from 'react-router-dom';

const Card = ({title, content, bgColor, btnBgColor, btnText, tab}) => {
  return (
    <>
      <div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">{content}</p>
        <Link
          to={`/${tab}`}
          className={`inline-block text-white rounded-lg px-4 py-2 hover:opacity-90 ${btnBgColor}`}>
          {btnText}
        </Link>
      </div>
    </>
  );
};

export default Card;
