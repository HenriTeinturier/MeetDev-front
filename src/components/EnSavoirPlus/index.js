// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/settings';
// == Import styles
import './ensavoirplus.scss';

function EnSavoirPlus() {
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const dispatch = useDispatch();
  return (

    <div className={isDark ? 'about dark' : 'about'}>
      <h2 className="about__title">
        En savoir plus
      </h2>
      <div className="about__philosophy">
        <h3 className="about__philosophy--title"> Philosophie </h3>
        <div className="about__philosophy--content">
          <p className={isDark ? 'darkP' : ''}>Notre site casse le principe de recrutement classique :</p>
          <p className={isDark ? 'darkP' : ''}>le développeur répond à une annonce du recruteur.
          </p>
          <p className={isDark ? 'darkP' : ''}>Notre application est basée sur le principe du « dating site »
            et de The Voice :
          </p>
          <p className={isDark ? 'darkP' : ''}>«Je te veux dans mon équipe»!</p>
          <p className={isDark ? 'darkP' : ''}>Vous connaissez les sites des rencontres comme «Tinder»…</p>
          <p className={isDark ? 'darkP' : ''}>Et bien, maintenant il y a </p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Dev</p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>LE site de rencontre professionnel
            entre des développeurs et des entreprises.
          </p>
        </div>
      </div>
      <div className="about__dev">
        <h3 className="about__dev--title"> Développeur </h3>
        <div className="about__dev--content">
          <p className={isDark ? 'darkP' : ''}>Vous avez sûrement regardé les offres d’emplois pour développeur ?</p>
          <p className={isDark ? 'darkP' : ''}>En 2022, chercher un job de dév sur Internet est difficile,
            les sites d’emploi sont généralistes, ayant une expérience utilisateur compliquée,
            et les sites carrière des entreprises insuffisamment détaillés.
          </p>
          <p className={isDark ? 'darkP' : ''}>ET surtout c’est le développeur qui doit contacter le recruteur.</p>
          <p className={isDark ? 'darkP' : ''}>Pourquoi devrait-on continuer ainsi ?</p>
          <p className={isDark ? 'darkP' : ''}>Notre mission chez Meet Dev est de changer tout cela,
            de mettre en avant votre profil auprès des entreprises,
            afin que ça soit elles qui vous contactent si votre profil les intéressent.
          </p>
          <p className={isDark ? 'darkP' : ''}>Il ne reste plus qu'à vous inscrire, remplir votre profil,
            et attendre qu'une entreprise vous accueille dans son équipe !
          </p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Your Future Company !</p>
        </div>
      </div>
      <div className="about__recruiter">
        <h3 className="about__recruiter--title"> Recruteur </h3>
        <div className="about__recruiter--content">
          <p className={isDark ? 'darkP' : ''}>Vous cherchez des développeurs web?</p>
          <p className={isDark ? 'darkP' : ''}>
            Il n’est pas chose aisé de trouver un développeur qui soit proche de son entreprise,
            et qui corresponde à ses critères et ses besoins.
          </p>
          <p className={isDark ? 'darkP' : ''}>
            Grâce à Meet Dev vous pouvez contacter facilement le candidat qui vous convient,
            vous gagnez du temps car vous n’aurez plus un grand nombre de CV à éplucher,
            ni de nombreuses annonces d’emploi à rédiger.
          </p>
          <p className={isDark ? 'darkP' : ''}>
            Vous sélectionnez un profil qui vous convient,
            ensuite vous pouvez soit le contacter directement ou bien,
            le garder dans vos favoris pour prendre rendez-vous ultérieurement.
          </p>
          <p className={isDark ? 'darkP' : ''}>Mais attention les développeurs sont très convoités !
          </p>
          <p className={isDark ? 'darkP' : ''}>Vous devenez grâce à Meet Dev un chasseur de tête hors-pair !
          </p>
          <p className={isDark ? 'about__slogan dark' : 'about__slogan'}>Meet Your Future Developer !</p>
        </div>
      </div>
      <div className="about__us">
        <h3 className="about__us--title"> Qui sommes-nous ? </h3>
        <div className="about__us--content">
          <p className={isDark ? 'darkP' : ''}>Nous sommes une équipe de 5 développeurs</p>
          <div className="about__us--cards">
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Alejandra</h4>
              <p className="about__us--cards--container--role">Lead Dev Back</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Alicia</h4>
              <p className="about__us--cards--container--role">Git Master</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Henri</h4>
              <p className="about__us--cards--container--role">Lead Dev Front</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Sébastien</h4>
              <p className="about__us--cards--container--role">Scrum Master</p>
            </div>
            <div className="about__us--cards--container">
              <h4 className="about__us--cards--container--name">Christophe</h4>
              <p className="about__us--cards--container--role">Product Owner</p>
            </div>

          </div>
          <Link to="/">
            <button
              type="button"
              className={isDark ? 'inscription__form__buttons__button--cancel dark' : 'inscription__form__buttons__button--cancel'}
              // if click on button return, come back to the home page
              onClick={() => {
                dispatch(logout());
              }}
            >Retour
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnSavoirPlus;
