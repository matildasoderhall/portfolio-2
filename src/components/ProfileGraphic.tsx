import './ProfileGraphic.scss';

interface ProfileGraphicProps {
    className?: string;
}

export const ProfileGraphic = ({className}:ProfileGraphicProps) => {
  const img = 'src/assets/images/headshot_2026_small-bw.jpg';
  return (
    <div className={`profile-graphic ${className || ''}`}>
      <div className="profile-graphic__img-wrapper">
        <img src={img} alt="" className="profile-graphic__img" />
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
