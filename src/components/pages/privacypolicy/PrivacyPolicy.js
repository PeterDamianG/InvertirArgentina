//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';

//Contenido del componente.
const PrivacyPolicy = () => (
  <Paper>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
    <Typography component="h2" variant="h2">
        Privacy Policy for InvertirArgentina
    </Typography>
      <Typography component="p" variant="h4">
        At InvertirArgentina, accessible from www.InvertirArgentina.Com.ar, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by InvertirArgentina and how we use it.
    </Typography>
      <Typography component="p" variant="h4">
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at InvertirArgentinaNow@Gmail.com
    </Typography>
      <Typography component="h2" variant="h2">
        Log Files
    </Typography>
      <Typography component="p" variant="h4">
        InvertirArgentina follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
    </Typography>
      <Typography component="h2" variant="h2">
        Cookies and Web Beacons
    </Typography>
      <Typography component="p" variant="h4">
        Like any other website, InvertirArgentina uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
    </Typography>
      <Typography component="h2" variant="h2">
        Google DoubleClick DART Cookie
    </Typography>
      <Typography component="p" variant="h4">
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
      </Typography>
      <Typography component="h2" variant="h2">
        Privacy Policies
    </Typography>
      <Typography component="p" variant="h4">
        You may consult this list to find the Privacy Policy for each of the advertising partners of InvertirArgentina.
    </Typography>
      <Typography component="p" variant="h4">
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on InvertirArgentina, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
    </Typography>
      <Typography component="p" variant="h4">
        Note that InvertirArgentina has no access to or control over these cookies that are used by third-party advertisers.
    </Typography>
      <Typography component="h2" variant="h2">
        Third Party Privacy Policies
    </Typography>
      <Typography component="p" variant="h4">
        InvertirArgentina's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
    </Typography>
      <Typography component="p" variant="h4">
        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
    </Typography>
      <Typography component="h2" variant="h2">
        Children's Information
    </Typography>
      <Typography component="p" variant="h4">
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
    </Typography>
      <Typography component="p" variant="h4">
        InvertirArgentina does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
    </Typography>
      <Typography component="h2" variant="h2">
        Online Privacy Policy Only
    </Typography>
      <Typography component="p" variant="h4">
        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in InvertirArgentina. This policy is not applicable to any information collected offline or via channels other than this website.
    </Typography>
      <Typography component="h2" variant="h2">
        Consent
    </Typography>
      <Typography component="p" variant="h4">
        By using our website, you hereby consent to our
      <Link to='/privacypolicy'>
          Privacy Policy
      </Link>
        and agree to its
      <Link to='/termsofservice'>
          Terms and Conditions.
      </Link>
      </Typography>
    </Grid>
  </Paper>
);

export default PrivacyPolicy;