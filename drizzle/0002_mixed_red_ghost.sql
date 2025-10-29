CREATE TABLE `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`post_id` integer NOT NULL,
	`author` text NOT NULL,
	`comment` text NOT NULL,
	`created_at` integer DEFAULT (current_timestamp) NOT NULL,
	`updated_at` integer DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author_id` text NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`content` text,
	`likes` integer DEFAULT 0,
	`created_at` integer DEFAULT (current_timestamp) NOT NULL,
	`updated_at` integer DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
