const Faq = () => {
  return (
    <div>
      <div className="p-8 text-center rounded-2xl mb-4">
        <h3 className="text-[2rem] font-bold text-dark">FAQs</h3>
      </div>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">How do I mark a book as &quot;read&quot; on your website?</div>
          <div className="collapse-content">
            <p>
              After finishing a book, you can mark it as &quot;read&quot; by clicking on the &quot;Read&quot; button on the book details page. You can find a
              list of marked as read books at &quot;Read Books&quot; tab in listed books page
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">How can I create a wishlist of books I want to read?</div>
          <div className="collapse-content">
            <p>To create a wishlist, you can click on the &quot;Wishlist&quot; button on the book details page.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Can I purchase books directly from your website?</div>
          <div className="collapse-content">
            <p>
              No, our website does not directly sell books. However, we will provide links to external retailers where you can purchase the books you&apos;re
              interested in if you contact us.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Can I contribute book recommendations or reviews to your website?</div>
          <div className="collapse-content">
            <p>
              Yes, we welcome contributions from our users. You can submit book recommendations, reviews, or suggestions through the &quot;Contact Us&quot;
              page, and our team will review them for inclusion on the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
