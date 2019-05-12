<?php
/**
 * Template Name: events
 */

get_header();
?>


<div class="events-page">
	<h1 class="page-full__container-title"><?= get_the_title(); ?></h1>

	<div class="events-page__container">

		<div class="grid">
			<ul class="grid__container">

				<?php
				// $query = new WP_Query( 'cat=20&nopaging=0' );
				$query = new WP_Query(array(
					'cat' => '20',
					// 'posts_per_page' => '1',
					// 'paged' => get_query_var('paged') ?: 1
					'paged' => '0'
				));
				if( $query->have_posts() ){
					while( $query->have_posts() ){
						$query->the_post();
						?>

						<li class="grid__item">
							<a href="<?php the_permalink(); ?>" class="post-item">
								<div class="post-item__container">
									<div class="post-item__box">
										<div class="post-item__date"><?php echo get_the_date('d-m-Y'); ?></div>
										<div class="post-item__author"><?php the_author(); ?></div>
									</div>
									<div class="post-item__title"><?php the_title(); ?></div>
									<!-- <div class="post-item__text"><?php the_excerpt(); ?></div> -->
								</div>
								<div class="post-item__img-container">
									<img src="<?php echo the_post_thumbnail_url( 'thumbnail' );; ?>" alt="" class="post-item__img">
								</div>
							</a>
						</li>

						<?php
					}
					// posts_nav_link();
					wp_reset_postdata();
				}
				else
					echo 'Записей нет.';
				?>

			</ul>

			<!-- <div class="grid__action">
				<div class="grid__btn btn"> show more </div>
			</div> -->
		</div>
	</div>
</div>



<?php
get_footer();
