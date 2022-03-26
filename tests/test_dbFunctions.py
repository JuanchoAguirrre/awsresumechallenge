import pytest
from GetDB.app import getdb
# from PutDB.app import putdb

class Tests:

    @pytest.fixture
    def event(self):
        return None

    @pytest.fixture
    def context(self):
        return object()

    # @pytest.mark.one
    def test_get(event, context):

        response = getdb(event, context)

        assert response.get('statusCode') == '200'


# class DummyClient:
#     # Taken from: https://blog.ippon.tech/using-pytest-with-aws-cdk/#:~:text=Using%20python%20with%20AWS%20CDK,automatic%20testing%2C%20and%20inline%20documentation.
#     def do_nothing(self, *args, return_value=None, return_none=False, **kwargs):
#         if return_none:
#             return None
#         elif return_value is not None:
#             return return_value
#         return self.default_return_value

#     def __getattr__(self, attr):
#         return self.do_nothing
