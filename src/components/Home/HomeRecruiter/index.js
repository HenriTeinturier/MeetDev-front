// styles
import './homerecruiter.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout, toggleWindowLog } from '../../../actions/settings';

function HomeRecruiter() {
  const dispatch = useDispatch();
  return (
    <div className="homerecruiter">
      <h3 className="homerecruiter__title">Recruteur</h3>
      <div className="homerecruiter__content">
        <div className="homerecruiter__dev--content">
          <p>Vous cherchez des développeurs web?</p>
          <p>
            Il n’est pas chose aisé de trouver un développeur qui soit proche de son entreprise,
            et qui corresponde à ses critères et ses besoins.
          </p>

          <p>
            Grâce à Meet Dev vous pouvez contacter facilement le candidat qui vous convient,
            vous gagnez du temps car vous n’aurez plus un grand nombre de CV à éplucher,
            ni de nombreuses annonces d’emploi à rédiger.
          </p>
          <p>
            Vous sélectionnez un profil qui vous convient,
            ensuite vous pouvez soit le contacter directement ou bien,
            le garder dans vos favoris pour prendre rendez-vous ultérieurement.
          </p>
          <p>Mais attention les développeurs sont très convoités !
          </p>
          <p>Vous devenez grâce à Meet Dev un chasseur de tête hors-pair !
          </p>
          <p className="homerecruiter__slogan">Meet Your Future Developer !</p>
        </div>
      </div>
      <div className="homerecruiter__button">
        <Link to="/inscription">
          <button
            type="button"
            className="homerecruiter__button--inscription"
          >
            Inscription Gratuite
          </button>
        </Link>
        <button
          type="button"
          className="homerecruiter__button--login"
          onClick={() => dispatch(toggleWindowLog(), login())}
        >
          Connexion
        </button>
        <Link to="/">
          <button
            type="button"
            className="homerecruiter__button--back"
            onClick={() => dispatch(logout())}
          >Retour
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeRecruiter;