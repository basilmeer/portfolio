import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import images from '../../assets/images';
import { Layers } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

const PortfolioItem = ({ item, darkMode }) => {
  const { title, content, href, stack, year } = item;
  const thumbnailName = title?.replace(/\s|-/g, '_').toLowerCase();
  const tooltipId = `tech-stack-${thumbnailName || 'item'}`;

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
      className={`group relative col-span-1 min-h-[280px] max-h-[280px] border text-left text-white transition-all duration-300 ${darkMode
        ? 'border-0 shadow-[25px_25px_0_0_#252525] hover:shadow-none'
        : 'border-black shadow-[25px_25px_0_0_#dddddd] hover:shadow-none'
        }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative h-full overflow-hidden">
        <img
          src={images[formatImageNames(thumbnailName)]}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="absolute inset-0 z-10 flex h-full flex-col p-[35px] transition-all duration-300 group-hover:pt-10">
        <div className="mb-5 flex items-center gap-2">
          <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
          {year && (
            <span className="shrink-0 border border-white/60 bg-black/45 px-2.5 py-1 text-[10px] font-semibold leading-none tracking-[0.2em] text-white backdrop-blur-sm shadow-[0_0_0_1px_rgba(0,0,0,0.35)]">
              {year}
            </span>
          )}
        </div>
        <p className="text-sm font-thin tracking-[0.5px]">{content}</p>
        <div className="flex items-center justify-between mt-auto">
          <Layers onClick={(e) => e.stopPropagation()} data-tooltip-id={tooltipId} data-tooltip-content={stack} />
          <Tooltip id={tooltipId} positionStrategy="fixed" style={{ zIndex: 9999 }} />
          <p className="relative right-0 mt-auto text-right transition-all duration-300 group-hover:-right-2">
            Check it out
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              size="sm"
              className="ml-2"
            />
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;

PortfolioItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    year: PropTypes.string,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};
