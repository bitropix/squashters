import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogContent } from '@/components/blogs/blog-content';
import { notFound } from 'next/navigation';

const blogs: Record<
  string,
  {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    content: string;
  }
> = {
  'essential-squash-techniques': {
    title: '5 Essential Squash Techniques Every Beginner Should Master',
    excerpt:
      'Starting your squash journey? Here are the fundamental techniques that will set a strong foundation for your game.',
    image: '/squash-player-forehand-technique-training.jpg',
    date: 'Dec 20, 2025',
    author: 'Coach Ashraf',
    category: 'Training Tips',
    readTime: '5 min read',
    content: `
      <p>Squash is a fast-paced, exciting sport that requires a combination of physical fitness, mental agility, and technical skill. Whether you're picking up a racket for the first time or looking to refine your basics, mastering these five essential techniques will give you a solid foundation.</p>

      <h2>1. The Basic Grip</h2>
      <p>The way you hold your racket determines everything else in your game. Use the "shake hands" grip - imagine you're shaking hands with the racket. Your thumb and forefinger should form a V shape on top of the handle. This grip allows for flexibility and power in your shots.</p>

      <h2>2. The Ready Position</h2>
      <p>Always return to the T (the center of the court) and maintain a ready position. Stand with your feet shoulder-width apart, knees slightly bent, racket up and in front of you. This position allows you to move quickly in any direction.</p>

      <h2>3. The Forehand Drive</h2>
      <p>The forehand is your most powerful shot. Keep your eye on the ball, turn your shoulders, and swing through the ball with a smooth motion. Follow through towards your target. Practice hitting the ball consistently to the back corners.</p>

      <h2>4. The Backhand Drive</h2>
      <p>Many beginners struggle with the backhand, but it's equally important. Use the same grip, step into the shot with your front foot, and swing across your body. Keep your wrist firm and follow through high.</p>

      <h2>5. Movement and Footwork</h2>
      <p>Good footwork is the foundation of great squash. Move efficiently using small, quick steps. Always try to reach the ball with time to set up properly. Return to the T after each shot.</p>

      <h2>Practice Tips</h2>
      <p>Spend time doing solo drills before playing matches. Hit the ball to yourself against the front wall, focusing on consistency. Practice moving around the court without a ball to improve your footwork.</p>

      <p>Remember, squash is a marathon, not a sprint. Focus on developing good habits from the start, and you'll see steady improvement over time. At Squashters, we help beginners develop these fundamental skills through structured coaching programs.</p>
    `,
  },
  'first-squash-tournament': {
    title: 'Preparing for Your First Squash Tournament: A Complete Guide',
    excerpt:
      'Everything you need to know about tournament preparation, from mental readiness to physical conditioning.',
    image: '/squash-tournament-competition-player-ready.jpg',
    date: 'Dec 15, 2025',
    author: 'Coach Priya',
    category: 'Tournaments',
    readTime: '8 min read',
    content: `
      <p>Competing in your first squash tournament can be both exciting and nerve-wracking. With proper preparation, you can walk onto the court with confidence. Here's your complete guide to tournament preparation.</p>

      <h2>Physical Preparation</h2>
      <p>Start preparing at least 4-6 weeks before the tournament. Increase your court time gradually, focusing on match-like situations. Include fitness training that mimics the demands of competitive squash - interval training, ghosting drills, and court sprints.</p>

      <h2>Technical Practice</h2>
      <p>Work on your weaknesses while maintaining your strengths. Practice under pressure by playing practice matches. Focus on your serve and return, as these start every rally.</p>

      <h2>Mental Preparation</h2>
      <p>Visualize yourself playing well and handling pressure situations. Develop a pre-match routine that helps you feel calm and focused. Remember that nervousness is normal - even top players get nervous before big matches.</p>

      <h2>The Night Before</h2>
      <p>Pack your bag early - rackets, spare grip, appropriate clothing, towel, water bottle, and snacks. Get a good night's sleep. Avoid trying anything new - stick to familiar equipment and routines.</p>

      <h2>Tournament Day</h2>
      <p>Arrive early to register and warm up properly. Start with light cardio, then hit with a partner or against the wall. Stay hydrated and eat light, easily digestible foods.</p>

      <h2>During Matches</h2>
      <p>Focus on one point at a time. Use the time between rallies to breathe and reset. Stick to your game plan but be prepared to adapt. Remember to enjoy the experience!</p>

      <p>Your first tournament is a learning experience. Win or lose, you'll gain valuable match experience that will make you a better player.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs[slug];
  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: `${blog.title} | Squashters`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs[slug];

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <BlogContent blog={blog} />
      </main>
      <Footer />
    </>
  );
}
