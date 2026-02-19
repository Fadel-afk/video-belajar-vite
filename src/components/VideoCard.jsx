const VideoCard = ({
  title,
  thumbnail,
  instructor,
  instructorPhoto,
  role,
  rating,
  totalStudents,
  price,
  description
}) => {
  return (
    <div className="video-card">
      <img className="thumbnail" src={thumbnail} alt={title} />

      <div className="video-content">
        <h4>{title}</h4>

         <p className="video-desc">{description}</p>

        <div className="instructor">
          <img
            className="profile"
            src={instructorPhoto}
            alt={instructor}
          />

          <div className="instructor-info">
            <span className="instructor-name">{instructor}</span>
            <span className="instructor-role">{role}</span>
          </div>
        </div>

        <div className="video-footer">
          <span className="rating-student">⭐ {rating} ({totalStudents})</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
