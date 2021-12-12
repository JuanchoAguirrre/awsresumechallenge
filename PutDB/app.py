import json
import boto3

# import requests


def put_db(event, context, dynamodb=None):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e

    __TableName__ = 'juanchos-cloud-resume-challenge'
    Primary_Col_Name = 'ID'
    Primary_Key = '1'

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table(__TableName__)

    getVisitCount = table.get_item(
        Key={
            Primary_Col_Name: Primary_Key
        }
    )
    
    currentVisitCount = getVisitCount['Item']['visitCount']

    response = table.put_item(
        Item={
            Primary_Col_Name: Primary_Key,
            "visitCount" : currentVisitCount + 1 
        }
    )
    
    print(response)
    return response
    

    # return {
    #     "statusCode": 200,
    #     "body": json.dumps({
    #         "count": table.creation_date_time,
    #         # "location": ip.text.replace("\n", "")
    #     }),
    # }
