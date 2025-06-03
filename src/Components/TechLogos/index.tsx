import classNames from 'classnames';
// import techLogos from './logos';
import css from './TechLogos.module.css';

type PropsT = {
    className?: string;
};

// export const TechLogos = ({ className }: PropsT) => (
//     <section className={classNames(css.wrapper, className)}>
//         {techLogos.map((tech) => (
//             <img key={tech} alt={`Logo: ${tech}`} className={`tech-logo--${tech}`} src={require(`../../assets/img/tech/${tech}`)} />
//         ))}
//     </section>
// );

// export const TechLogos = ({ className }: PropsT) => (
//     <section className={classNames(css.wrapper, className)}>
//         {techLogos.map((tech) => (
//             <>
//                 &lt;img alt=&quot;{`Logo: ${tech}`}&quot; className=&quot;{`tech-logo--${tech}`}&quot; src=
//                 {'{require("' + `../../assets/img/tech/${tech}` + '")}'} /&gt;
//             </>
//         ))}
//     </section>
// );

export const TechLogos = ({ className }: PropsT) => (
    <section className={classNames(css.wrapper, className)}>
        <img
            alt="Logo: typescript-icon.svg"
            className="tech-logo--typescript-icon.svg"
            src={require('../../assets/img/tech/typescript-icon.svg')}
        />
        <img
            alt="Logo: javascript.svg"
            className="tech-logo--javascript.svg"
            src={require('../../assets/img/tech/javascript.svg')}
        />
        <img
            alt="Logo: html-5.svg"
            className="tech-logo--html-5.svg"
            src={require('../../assets/img/tech/html-5.svg')}
        />
        <img alt="Logo: css-3.svg" className="tech-logo--css-3.svg" src={require('../../assets/img/tech/css-3.svg')} />
        <img alt="Logo: react.svg" className="tech-logo--react.svg" src={require('../../assets/img/tech/react.svg')} />
        <img alt="Logo: redux.svg" className="tech-logo--redux.svg" src={require('../../assets/img/tech/redux.svg')} />
        <img
            alt="Logo: nextjs.svg"
            className="tech-logo--nextjs.svg"
            src={require('../../assets/img/tech/nextjs.svg')}
        />
        <img alt="Logo: expo.svg" className="tech-logo--expo.svg" src={require('../../assets/img/tech/expo.svg')} />
        <img
            alt="Logo: nodejs.svg"
            className="tech-logo--nodejs.svg"
            src={require('../../assets/img/tech/nodejs.svg')}
        />
        <img alt="Logo: deno.svg" className="tech-logo--deno.svg" src={require('../../assets/img/tech/deno.svg')} />
        <img
            alt="Logo: webpack.svg"
            className="tech-logo--webpack.svg"
            src={require('../../assets/img/tech/webpack.svg')}
        />
        <img
            alt="Logo: vitejs.svg"
            className="tech-logo--vitejs.svg"
            src={require('../../assets/img/tech/vitejs.svg')}
        />
        <img
            alt="Logo: esbuild.svg"
            className="tech-logo--esbuild.svg"
            src={require('../../assets/img/tech/esbuild.svg')}
        />
        <img alt="Logo: babel.svg" className="tech-logo--babel.svg" src={require('../../assets/img/tech/babel.svg')} />
        <img alt="Logo: npm.svg" className="tech-logo--npm.svg" src={require('../../assets/img/tech/npm.svg')} />
        <img alt="Logo: yarn.svg" className="tech-logo--yarn.svg" src={require('../../assets/img/tech/yarn.svg')} />
        <img
            alt="Logo: express.svg"
            className="tech-logo--express.svg"
            src={require('../../assets/img/tech/express.svg')}
        />
        <img
            alt="Logo: prettier.svg"
            className="tech-logo--prettier.svg"
            src={require('../../assets/img/tech/prettier.svg')}
        />
        <img
            alt="Logo: react-router.svg"
            className="tech-logo--react-router.svg"
            src={require('../../assets/img/tech/react-router.svg')}
        />
        <img alt="Logo: jest.svg" className="tech-logo--jest.svg" src={require('../../assets/img/tech/jest.svg')} />
        <img
            alt="Logo: storybook-icon.svg"
            className="tech-logo--storybook-icon.svg"
            src={require('../../assets/img/tech/storybook-icon.svg')}
        />
        <img
            alt="Logo: immutable.svg"
            className="tech-logo--immutable.svg"
            src={require('../../assets/img/tech/immutable.svg')}
        />
        <img
            alt="Logo: gatsby.svg"
            className="tech-logo--gatsby.svg"
            src={require('../../assets/img/tech/gatsby.svg')}
        />
        <img
            alt="Logo: react-query-icon.svg"
            className="tech-logo--react-query-icon.svg"
            src={require('../../assets/img/tech/react-query-icon.svg')}
        />
        <img alt="Logo: gulp.svg" className="tech-logo--gulp.svg" src={require('../../assets/img/tech/gulp.svg')} />
        <img alt="Logo: grunt.svg" className="tech-logo--grunt.svg" src={require('../../assets/img/tech/grunt.svg')} />
        <img alt="Logo: pm2.svg" className="tech-logo--pm2.svg" src={require('../../assets/img/tech/pm2.svg')} />
        <img alt="Logo: nginx.svg" className="tech-logo--nginx.svg" src={require('../../assets/img/tech/nginx.svg')} />
        <img alt="Logo: sass.svg" className="tech-logo--sass.svg" src={require('../../assets/img/tech/sass.svg')} />
        <img
            alt="Logo: postcss.svg"
            className="tech-logo--postcss.svg"
            src={require('../../assets/img/tech/postcss.svg')}
        />
        <img
            alt="Logo: github-octocat.svg"
            className="tech-logo--github-octocat.svg"
            src={require('../../assets/img/tech/github-octocat.svg')}
        />
        <img
            alt="Logo: gitlab.svg"
            className="tech-logo--gitlab.svg"
            src={require('../../assets/img/tech/gitlab.svg')}
        />
        <img
            alt="Logo: git-icon.svg"
            className="tech-logo--git-icon.svg"
            src={require('../../assets/img/tech/git-icon.svg')}
        />
        <img
            alt="Logo: chrome.svg"
            className="tech-logo--chrome.svg"
            src={require('../../assets/img/tech/chrome.svg')}
        />
        <img alt="Logo: mysql.svg" className="tech-logo--mysql.svg" src={require('../../assets/img/tech/mysql.svg')} />
        <img
            alt="Logo: mariadb.svg"
            className="tech-logo--mariadb.svg"
            src={require('../../assets/img/tech/mariadb.svg')}
        />
        <img
            alt="Logo: mongodb.svg"
            className="tech-logo--mongodb.svg"
            src={require('../../assets/img/tech/mongodb.svg')}
        />
        <img alt="Logo: snyk.svg" className="tech-logo--snyk.svg" src={require('../../assets/img/tech/snyk.svg')} />
        <img
            alt="Logo: supabase-icon.svg"
            className="tech-logo--supabase-icon.svg"
            src={require('../../assets/img/tech/supabase-icon.svg')}
        />
        <img
            alt="Logo: bootstrap.svg"
            className="tech-logo--bootstrap.svg"
            src={require('../../assets/img/tech/bootstrap.svg')}
        />
        <img
            alt="Logo: webcomponents.svg"
            className="tech-logo--webcomponents.svg"
            src={require('../../assets/img/tech/webcomponents.svg')}
        />
        <img
            alt="Logo: backbone-icon.svg"
            className="tech-logo--backbone-icon.svg"
            src={require('../../assets/img/tech/backbone-icon.svg')}
        />
        <img
            alt="Logo: ember-tomster.svg"
            className="tech-logo--ember-tomster.svg"
            src={require('../../assets/img/tech/ember-tomster.svg')}
        />
        <img
            alt="Logo: handlebars.svg"
            className="tech-logo--handlebars.svg"
            src={require('../../assets/img/tech/handlebars.svg')}
        />
        <img
            alt="Logo: visual-studio-code.svg"
            className="tech-logo--visual-studio-code.svg"
            src={require('../../assets/img/tech/visual-studio-code.svg')}
        />
        <img alt="Logo: php.svg" className="tech-logo--php.svg" src={require('../../assets/img/tech/php.svg')} />
        <img
            alt="Logo: digital-ocean.svg"
            className="tech-logo--digital-ocean.svg"
            src={require('../../assets/img/tech/digital-ocean.svg')}
        />
        <img alt="Logo: aws.svg" className="tech-logo--aws.svg" src={require('../../assets/img/tech/aws.svg')} />
        <img
            alt="Logo: apache.svg"
            className="tech-logo--apache.svg"
            src={require('../../assets/img/tech/apache.svg')}
        />
        <img
            alt="Logo: circleci.svg"
            className="tech-logo--circleci.svg"
            src={require('../../assets/img/tech/circleci.svg')}
        />
        <img
            alt="Logo: docker.svg"
            className="tech-logo--docker.svg"
            src={require('../../assets/img/tech/docker.svg')}
        />
        <img
            alt="Logo: vagrant.svg"
            className="tech-logo--vagrant.svg"
            src={require('../../assets/img/tech/vagrant.svg')}
        />
    </section>
);
