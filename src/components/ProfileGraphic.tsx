import './ProfileGraphic.scss';
import profileImg from '../assets/images/headshot_2026_small-bw.jpg';

interface ProfileGraphicProps {
  className?: string;
}

export const ProfileGraphic = ({ className }: ProfileGraphicProps) => {
  const img = profileImg;
  return (
    <div className={`profile-graphic ${className || ''}`}>
      <div className="profile-graphic__img-wrapper">
        <img
          src={img}
          alt="Matilda Söderhäll"
          className="profile-graphic__img"
          height={2048}
          width={1536}
          loading="lazy"
        />
        <div className="profile-graphic__overlay" aria-hidden="true" />
      </div>

      <div className="profile-graphic__decor" aria-hidden="true">
        <div className="profile-graphic__box" />
        <div className="profile-graphic__box" />

        <div className="profile-graphic__line" />
      </div>
    </div>
  );
};
