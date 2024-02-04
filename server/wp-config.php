<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lamahi-server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',1FR4cSI(s=>pMJPjaoS@M3g>Ov3joXgH%g`[}:3a;8?Q#ou-Km*>WTSv@jF24=G' );
define( 'SECURE_AUTH_KEY',  'uwD$FGrFJzWS+AxW82^2x2RQQW n?B!-^)ChG.`a|>w$few*w.8MW)1:w4HO|q*H' );
define( 'LOGGED_IN_KEY',    'g=1rf#lh8FB`CqwV3y-Ei(W_WMa003#1i0{NkuZ`leO 2q!o/ZhMB7J+MEi~X*:s' );
define( 'NONCE_KEY',        'e}5I`UWKg:(1E+QFYQjF<m==A8$@D61xm lY.yWR1l0Uvt`;9rS(%LP>mT~g4*|[' );
define( 'AUTH_SALT',        '!~lYF0/V=}qNpsn!NN_:drMR0 r ,?V<gi2XC~/,6e&7jA nSD.ZZ-|GSgZnt}Z2' );
define( 'SECURE_AUTH_SALT', 'j:v#QHCxZC$x_}@g~pUT)sF,SrAynw/xUiM[{_)i340QMhH[{u;Zuw24QoBvzh(Z' );
define( 'LOGGED_IN_SALT',   'Z<>gAU;Fx7R!4K)T=hWAPLlIfZga !@]z9~P@*{/wUg1@zH&#c;d%^:-aCax8P7%' );
define( 'NONCE_SALT',       'u3 s:{BW=_J-.[1BMX,tuU% )%J31k8RY{Kn-BTxs<E+1=/UT^< @>i-TN8gK}fF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
