import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import images from '../../assets/images';
import { CircleHelp, Layers } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

const PortfolioItem = ({ item }) => {
  console.log("item", item)
  const { title, content, href, stack } = item;
  const thumbnailName = title?.replace(/\s|-/g, '_').toLowerCase();

  const formatImageNames = (name) => {
    switch (name) {
      case "men's_health_telehealth_system":
        return "sildenafil";
      case "telehealth_system":
        return "pocketmed";
      default:
        return name;
    }
  }

  return (
    <a
      href={href}
      className="portfolio-item relative col-span-1"
      target="_blank"
      rel="noopener noreferrer">
      <div className="image">
        <img src={images[formatImageNames(thumbnailName)]} alt={title} className="object-cover" />
      </div>
      <div className="content">
        <h2 className="title text-2xl md:text-3xl">{title}</h2>
        <p className="description">{content}</p>
        <div className="flex items-center justify-between mt-auto">
          <Layers onClick={(e) => e.stopPropagation()} data-tooltip-id="tech-stack" data-tooltip-content={stack} />
          <Tooltip id="tech-stack" />
          <p className="view-more">
            View More
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              size="sm"
              className="ml-2 view-more-icon"
            />
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
