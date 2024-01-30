import classNames from 'classnames';
// import techLogos from './logos';
import css from './TechLogos.module.css';

type PropsT = {
    className?: string;
};

// export const TechLogos = ({ className }: PropsT) => (
//     <section className={classNames(css.wrapper, className)}>
//         {techLogos.map((tech) => (
//             <img key={tech} alt={`Logo: ${tech}`} className={`tech-logo--${tech}`} src={require(`./img/${tech}`)} />
//         ))}
//     </section>
// );

// export const TechLogos = ({ className }: PropsT) => (
//     <section className={classNames(css.wrapper, className)}>
//         {techLogos.map((tech) => (
//             <>
//                 &lt;img alt=&quot;{`Logo: ${tech}`}&quot; className=&quot;{`tech-logo--${tech}`}&quot; src=
//                 {'{require("' + `./img/${tech}` + '")}'} /&gt;
//             </>
//         ))}
//     </section>
// );

export const TechLogos = ({ className }: PropsT) => (
    <section className={classNames(css.wrapper, className)}>
        <img
            alt="Logo: typescript-icon.svg"
            className="tech-logo--typescript-icon.svg"
            src={require('./img/typescript-icon.svg')}
        />
        <img alt="Logo: javascript.svg" className="tech-logo--javascript.svg" src={require('./img/javascript.svg')} />
        <img alt="Logo: html-5.svg" className="tech-logo--html-5.svg" src={require('./img/html-5.svg')} />
        <img alt="Logo: css-3.svg" className="tech-logo--css-3.svg" src={require('./img/css-3.svg')} />
        <img alt="Logo: react.svg" className="tech-logo--react.svg" src={require('./img/react.svg')} />
        <img alt="Logo: redux.svg" className="tech-logo--redux.svg" src={require('./img/redux.svg')} />
        <img alt="Logo: nextjs.svg" className="tech-logo--nextjs.svg" src={require('./img/nextjs.svg')} />
        <img alt="Logo: expo.svg" className="tech-logo--expo.svg" src={require('./img/expo.svg')} />
        <img alt="Logo: nodejs.svg" className="tech-logo--nodejs.svg" src={require('./img/nodejs.svg')} />
        <img alt="Logo: deno.svg" className="tech-logo--deno.svg" src={require('./img/deno.svg')} />
        <img alt="Logo: webpack.svg" className="tech-logo--webpack.svg" src={require('./img/webpack.svg')} />
        <img alt="Logo: vitejs.svg" className="tech-logo--vitejs.svg" src={require('./img/vitejs.svg')} />
        <img alt="Logo: esbuild.svg" className="tech-logo--esbuild.svg" src={require('./img/esbuild.svg')} />
        <img alt="Logo: babel.svg" className="tech-logo--babel.svg" src={require('./img/babel.svg')} />
        <img alt="Logo: npm.svg" className="tech-logo--npm.svg" src={require('./img/npm.svg')} />
        <img alt="Logo: yarn.svg" className="tech-logo--yarn.svg" src={require('./img/yarn.svg')} />
        <img alt="Logo: express.svg" className="tech-logo--express.svg" src={require('./img/express.svg')} />
        <img alt="Logo: prettier.svg" className="tech-logo--prettier.svg" src={require('./img/prettier.svg')} />
        <img
            alt="Logo: react-router.svg"
            className="tech-logo--react-router.svg"
            src={require('./img/react-router.svg')}
        />
        <img alt="Logo: jest.svg" className="tech-logo--jest.svg" src={require('./img/jest.svg')} />
        <img
            alt="Logo: storybook-icon.svg"
            className="tech-logo--storybook-icon.svg"
            src={require('./img/storybook-icon.svg')}
        />
        <img alt="Logo: immutable.svg" className="tech-logo--immutable.svg" src={require('./img/immutable.svg')} />
        <img alt="Logo: gatsby.svg" className="tech-logo--gatsby.svg" src={require('./img/gatsby.svg')} />
        <img
            alt="Logo: react-query-icon.svg"
            className="tech-logo--react-query-icon.svg"
            src={require('./img/react-query-icon.svg')}
        />
        <img alt="Logo: gulp.svg" className="tech-logo--gulp.svg" src={require('./img/gulp.svg')} />
        <img alt="Logo: grunt.svg" className="tech-logo--grunt.svg" src={require('./img/grunt.svg')} />
        <img alt="Logo: pm2.svg" className="tech-logo--pm2.svg" src={require('./img/pm2.svg')} />
        <img alt="Logo: nginx.svg" className="tech-logo--nginx.svg" src={require('./img/nginx.svg')} />
        <img alt="Logo: sass.svg" className="tech-logo--sass.svg" src={require('./img/sass.svg')} />
        <img alt="Logo: postcss.svg" className="tech-logo--postcss.svg" src={require('./img/postcss.svg')} />
        <img
            alt="Logo: github-octocat.svg"
            className="tech-logo--github-octocat.svg"
            src={require('./img/github-octocat.svg')}
        />
        <img alt="Logo: gitlab.svg" className="tech-logo--gitlab.svg" src={require('./img/gitlab.svg')} />
        <img alt="Logo: git-icon.svg" className="tech-logo--git-icon.svg" src={require('./img/git-icon.svg')} />
        <img alt="Logo: chrome.svg" className="tech-logo--chrome.svg" src={require('./img/chrome.svg')} />
        <img alt="Logo: mysql.svg" className="tech-logo--mysql.svg" src={require('./img/mysql.svg')} />
        <img alt="Logo: mariadb.svg" className="tech-logo--mariadb.svg" src={require('./img/mariadb.svg')} />
        <img alt="Logo: mongodb.svg" className="tech-logo--mongodb.svg" src={require('./img/mongodb.svg')} />
        <img alt="Logo: snyk.svg" className="tech-logo--snyk.svg" src={require('./img/snyk.svg')} />
        <img
            alt="Logo: supabase-icon.svg"
            className="tech-logo--supabase-icon.svg"
            src={require('./img/supabase-icon.svg')}
        />
        <img alt="Logo: bootstrap.svg" className="tech-logo--bootstrap.svg" src={require('./img/bootstrap.svg')} />
        <img
            alt="Logo: webcomponents.svg"
            className="tech-logo--webcomponents.svg"
            src={require('./img/webcomponents.svg')}
        />
        <img
            alt="Logo: backbone-icon.svg"
            className="tech-logo--backbone-icon.svg"
            src={require('./img/backbone-icon.svg')}
        />
        <img
            alt="Logo: ember-tomster.svg"
            className="tech-logo--ember-tomster.svg"
            src={require('./img/ember-tomster.svg')}
        />
        <img alt="Logo: handlebars.svg" className="tech-logo--handlebars.svg" src={require('./img/handlebars.svg')} />
        <img
            alt="Logo: visual-studio-code.svg"
            className="tech-logo--visual-studio-code.svg"
            src={require('./img/visual-studio-code.svg')}
        />
        <img alt="Logo: php.svg" className="tech-logo--php.svg" src={require('./img/php.svg')} />
        <img
            alt="Logo: digital-ocean.svg"
            className="tech-logo--digital-ocean.svg"
            src={require('./img/digital-ocean.svg')}
        />
        <img alt="Logo: aws.svg" className="tech-logo--aws.svg" src={require('./img/aws.svg')} />
        <img alt="Logo: apache.svg" className="tech-logo--apache.svg" src={require('./img/apache.svg')} />
        <img alt="Logo: circleci.svg" className="tech-logo--circleci.svg" src={require('./img/circleci.svg')} />
        <img alt="Logo: docker.svg" className="tech-logo--docker.svg" src={require('./img/docker.svg')} />
        <img alt="Logo: vagrant.svg" className="tech-logo--vagrant.svg" src={require('./img/vagrant.svg')} />
    </section>
);
