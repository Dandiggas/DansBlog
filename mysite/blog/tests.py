from django.test import TestCase
from django.urls import reverse

class BlogTests(TestCase):
    def test_post_list_view(self):
        url = reverse('blog:post_list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)


