<?php
/**
 * Template Name: home
 */

get_header();
?>

<main id="main" class="site-main">

	<section class="hero">
		<div class="hero__container js-main-hero-slider">

			<?php if( have_rows('home-hero') ): ?>
				<?php while( have_rows('home-hero') ): the_row(); ?>

					<div class="hero__item">

						<div class="hero__bg-container">
							<img src="<?php the_sub_field('bg'); ?>" alt="" class="hero__bg" />
						</div>

						<div class="hero__box">
							<h1 class="hero__title"><?php the_sub_field('title'); ?></h1>
							<h2 class="hero__subtitle"><?php the_sub_field('subtitle'); ?></h2>

							<?php if( have_rows('action') ): ?>
								<?php while( have_rows('action') ): the_row(); ?>

									<a href="<?php the_sub_field('link'); ?>" class="hero__action"><?php the_sub_field('link-title'); ?></a>

								<?php endwhile; ?>
							<?php endif; ?>
						</div>

						<!-- <div class="hero-grid js-hero-slider">

							<?php if( have_rows('repeater') ): ?>
								<?php while( have_rows('repeater') ): the_row(); ?>

									<div class="hero-grid__item js-same-height">
										<div class="hero-grid__title "><?php the_sub_field('repeater-title'); ?></div>
										<div class="hero-grid__text "><?php the_sub_field('repeater-subtitle'); ?></div>
									</div>

								<?php endwhile; ?>
							<?php endif; ?>

						</div> -->


					</div>

				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</section>

	<section class="section-what-is js-nav-trigger">
		<h6 class="block-title block-title--on-dark section-what-is__title"><?php the_field('home-what-is-mechanic__title'); ?></h6>
		<div class="section-what-is__container container js-what-is-slider">

			<?php if( have_rows('home-what-is-mechanic__repeater') ): ?>
				<?php while( have_rows('home-what-is-mechanic__repeater') ): the_row(); ?>

					<div class="section-what-is__item">
						<div class="section-what-is__img-container">
							<img src="<?php the_sub_field('home-what-is-mechanic__repeater-img'); ?>">
						</div>
						<div class="section-what-is__item-title"><?php the_sub_field('home-what-is-mechanic__repeater-title'); ?></div>
					</div>

				<?php endwhile; ?>
			<?php endif; ?>

		</div>
	</section>


	<section class="section-students-learn">
		<h6 class="block-title block-title--on-dark section-students-learn__title"><?php the_field('home-students-learn__title'); ?></h6>
		<div class="section-students-learn__container container">

			<?php if( have_rows('home-students-learn__repeater') ): ?>
				<?php while( have_rows('home-students-learn__repeater') ): the_row(); ?>

					<div class="section-students-learn__item-container">
						<div class="section-students-learn__item">
							<div class="section-students-learn__img-container">
								<img src="<?php the_sub_field('home-students-learn__repeater-img'); ?>">
							</div>
							<div class="section-students-learn__item-title"><?php the_sub_field('home-students-learn__repeater-title'); ?></div>
						</div>
					</div>

				<?php endwhile; ?>
			<?php endif; ?>

		</div>
	</section>

	<div class="section-horizontal-slider section-horizontal-slider--events">
		<div class="section-horizontal-slider__container js-events-slider">
			<ul class="section-horizontal-slider__slider">

				<li class="section-horizontal-slider__item">
					<div class="section-horizontal-slider__item-title">Upcoming events</div>
					<div class="section-horizontal-slider__item-text">See what events are waiting for you</div>
					<a href="<?php echo esc_url( home_url( '/about-us/events/' ) ); ?>" class="section-horizontal-slider__item-link">View all</a>
				</li>

				<?php
				$query = new WP_Query( 'cat=20&posts_per_page=6' );
				if( $query->have_posts() ){
					while( $query->have_posts() ){
						$query->the_post();
						?>

						<li class="section-horizontal-slider__item">
							<div class="post-card post-card--events">
								<div class="post-card__top">
									<div class="post-card__date">
										<div class="post-card__day"><?php echo get_the_date('d'); ?></div>
										<div class="post-card__month"><?php echo get_the_date('M-y'); ?></div>
									</div>
									<a href="<?php the_permalink(); ?>" class="post-card__link">
										<span>See inside</span>
										<i class="fas fa-arrow-alt-circle-right"></i>
									</a>
								</div>
								<div class="post-card__bottom">
									<a href="<?php the_permalink(); ?>" class="post-card__title"><?php wp_trim_words( the_title(), $num_words = 3, $more = null ) ?></a>
									<div class="post-card__content"><?php wp_trim_words( the_excerpt(), $num_words = 3, $more = null ) ?></div>
								</div>
							</div>
						</li>

						<?php
					}
					wp_reset_postdata();
				}
				else
					?>

				<?php
				?>

			</ul>
		</div>
		<div class="scrollbar">
			<div class="handle">
				<div class="mousearea"></div>
			</div>
		</div>
	</div>

	<div class="section-horizontal-slider section-horizontal-slider--news">
		<div class="section-horizontal-slider__container js-news-slider">
			<ul class="section-horizontal-slider__slider section-horizontal-slider__slider--news">
				<li class="section-horizontal-slider__item section-horizontal-slider__item--news">
					<div class="section-horizontal-slider__item-title">Our news</div>
					<div class="section-horizontal-slider__item-text">See what news are waiting for you</div>
					<a href="<?php echo esc_url( home_url( '/about-us/news/' ) ); ?>" class="section-horizontal-slider__item-link">View all</a>
				</li>

				<?php
				$query = new WP_Query( 'cat=19&posts_per_page=6' );
				if( $query->have_posts() ){
					while( $query->have_posts() ){
						$query->the_post();
						?>

						<li class="section-horizontal-slider__item">
							<div class="post-card post-card--news">
								<div class="post-card__top">
									<div class="post-card__date">
										<div class="post-card__day"><?php echo get_the_date('d'); ?></div>
										<div class="post-card__month"><?php echo get_the_date('M-y'); ?></div>
									</div>
									<a href="<?php the_permalink(); ?>" class="post-card__link">
										<span>See inside</span>
										<i class="fas fa-arrow-alt-circle-right"></i>
									</a>
								</div>
								<div class="post-card__bottom">
									<a href="<?php the_permalink(); ?>" class="post-card__title"><?= mb_strimwidth(the_title(), 0, 1, "..."); ?></a>
									<div class="post-card__content"><?= mb_strimwidth(the_excerpt(), 0, 1, "..."); ?></div>
								</div>
							</div>
						</li>

						<?php
					}
					wp_reset_postdata();
				}
				else
					?>

				<?php
				?>

			</ul>
		</div>
		<div class="scrollbar">
			<div class="handle">
				<div class="mousearea"></div>
			</div>
		</div>
	</div>

	<div class="section-enrollees container">
		<h6 class="block-title block-title--on-dark"><?php the_field('enrollees-block-title'); ?></h6>
		<div class="section-enrollees__container js-slider-enrollees">

			<?php if( have_rows('enrollees-repeater') ): ?>
				<?php while( have_rows('enrollees-repeater') ): the_row(); ?>

					<div class="section-enrollees__item-container">
						<div class="section-enrollees__item">
							<div class="section-enrollees__img-container">
								<img src="<?php the_sub_field('enrollees-avatar'); ?>" alt="" class="section-enrollees__img">
							</div>
							<div class="section-enrollees__title"><?php the_sub_field('enrollees-name'); ?></div>
							<div class="section-enrollees__subtitle"><?php the_sub_field('enrollees-description'); ?></div>
							<div class="section-enrollees__box">
								<div class="section-enrollees__year"><?php the_sub_field('enrollees-ruletime-begin'); ?></div>
								<span> - </span>
								<div class="section-enrollees__year"><?php the_sub_field('enrollees-ruletime-end'); ?></div>
							</div>
						</div>

					</div>

				<?php endwhile; ?>
			<?php endif; ?>

		</div>
	</div>

	<div class="section-famous container">
		<h6 class="block-title block-title--on-dark"><?php the_field('famous-block-title'); ?></h6>
		<div class="section-famous__container js-slider-enrollees">

			<?php if( have_rows('famous-repeater') ): ?>
				<?php while( have_rows('famous-repeater') ): the_row(); ?>

					<div class="section-famous__item-container">
						<div class="section-famous__item">
							<div class="section-famous__img-container">
								<img src="<?php the_sub_field('famous-avatar'); ?>" alt="" class="section-famous__img">
							</div>
							<div class="section-famous__title"><?php the_sub_field('famous-name'); ?></div>
							<div class="section-famous__subtitle"><?php the_sub_field('famous-description'); ?></div>
							<div class="section-famous__box">
								<div class="section-famous__year"><?php the_sub_field('famous-ruletime-begin'); ?></div>
								<span> - </span>
								<div class="section-famous__year"><?php the_sub_field('famous-ruletime-end'); ?></div>
							</div>
						</div>
					</div>

				<?php endwhile; ?>
			<?php endif; ?>

		</div>
	</div>

	<section class="section-lectures container">
		<h6 class="block-title"><?php the_field('teacher-block-title'); ?></h6>
		<div class="section-lectures__container js-slider-lectures">

			<?php if( have_rows('teacher-repeater') ): ?>
				<?php while( have_rows('teacher-repeater') ): the_row(); ?>

					<div class="section-lectures__item-container">
						<div class="section-lectures__item">
							<div class="section-lectures__item-box">

								<div class="section-lectures__img-container">
									<img src="<?php the_sub_field('teacher-avatar'); ?>" alt="" class="section-lectures__img">
								</div>
								<div class="section-lectures__box">
									<div class="section-lectures__title"><?php the_sub_field('teacher-name'); ?></div>
									<div class="section-lectures__subtitle"><?php the_sub_field('teacher-post'); ?></div>
									<div class="section-lectures__social">

										<?php if( have_rows('teacher-mail-repeater') ): ?>
											<?php while( have_rows('teacher-mail-repeater') ): the_row(); ?>

												<a class="section-lectures__social-item" href="mailto:<?php the_sub_field('teacher-mail-item'); ?>" class="section-lectures__social-link"><i class="lectors__social-icon fas fa-at" aria-hidden="true"></i></a>

											<?php endwhile; ?>
										<?php endif; ?>

										<?php if( have_rows('teacher-social-repeater') ): ?>
											<?php while( have_rows('teacher-social-repeater') ): the_row(); ?>

												<a class="section-lectures__social-item" href="<?php the_sub_field('teacher-social-link'); ?>" class="section-lectures__social-link"><i class="lectors__social-icon <?php the_sub_field('teacher-social-icon'); ?>" aria-hidden="true"></i></a>

											<?php endwhile; ?>
										<?php endif; ?>

									</div>
								</div>

							</div>
						</div>
					</div>

				<?php endwhile; ?>
			<?php endif; ?>

		</div>

		<div class="section-lectures__action">
			<a href="<?php echo esc_url( home_url( '/about-us/teachers/' ) ); ?>" class="section-lectures__btn btn">Show all</a>
		</div>
	</section>

</main><!-- #main -->

<?php
get_footer();
