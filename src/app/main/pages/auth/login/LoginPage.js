import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function LoginPage() {
	const classes = useStyles();

	const { form, handleChange, resetForm } = useForm({
		email: '',
		password: '',
		remember: true
	});

	function isFormValid() {
		return form.email.length > 0 && form.password.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();

		alert("success redirecting you")
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384 rounded-8">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32 font-bold text-20 sm:text-24">
								Login to your account
							</Typography>

							<form
								name="loginForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<TextField
									className="mb-16"
									label="Password"
									type="password"
									name="password"
									value={form.password}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
									<FormControl>
										<FormControlLabel
											control={
												<Checkbox
													name="remember"
													checked={form.remember}
													onChange={handleChange}
												/>
											}
											label="Remember Me"
										/>
									</FormControl>

									<Link className="font-medium" to="/pages/auth/forgot-password">
										Forgot Password?
									</Link>
								</div>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="LOG IN"
									disabled={!isFormValid()}
									type="submit"
								>
									Login
								</Button>
							</form>

							<div className="my-24 flex items-center justify-center">
								<Divider className="w-32" />
								<span className="mx-8 font-bold">OR</span>
								<Divider className="w-32" />
							</div>

							<Button variant="contained" color="secondary" size="small" className="w-192 mb-8">
								Log in with Google
							</Button>

							<Button variant="contained" color="primary" size="small" className="w-192">
								Log in with Facebook
							</Button>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<span className="font-medium">Don't have an account?</span>
								<Link className="font-medium" to="/pages/auth/register">
									Create an account
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default LoginPage;
